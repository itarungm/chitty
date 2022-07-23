import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatRadioButton, MatRadioChange } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChitType } from 'src/app/enums/chit-type.enum';
import { CommonFunctionsService } from '../../services/common-functions.service';
import { StorageService } from '../../services/storage.service';
import { v4 as uuidv4 } from 'uuid';
import { ChitList } from 'src/app/models/chit-list.model';

@Component({
  selector: 'app-add-edit-chit',
  templateUrl: './add-edit-chit.component.html',
  styleUrls: ['./add-edit-chit.component.scss'],
})
export class AddEditChitComponent implements OnInit {
  isEditMode: boolean = false;
  selectedChitType: ChitType = ChitType.NOTE_ONLY;
  ChitTypes = ChitType;
  chitForm!: FormGroup;
  fileNameForUpdate!: string;
  constructor(
    public dialogRef: MatDialogRef<AddEditChitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ChitList,
    private fb: FormBuilder,
    private storageService: StorageService,
    private commonFunctions: CommonFunctionsService,
    private _snackBar: MatSnackBar
  ) {
    this.chitForm = this.fb.group({
      id: [uuidv4()],
      type: [this.ChitTypes.NOTE_ONLY, [Validators.required]],
      note: ['', [Validators.required]],
      dueDate: [new Date()],
      attachment: [''],
    });
    this.isEditMode = data ? true : false;
    if (this.isEditMode) {
      if (this.data.attachment) {
        this.fileNameForUpdate = this.data.attachment;
        this.data.attachment = '';
      }
      this.patchChitValues();
    }
  }

  patchChitValues() {
    this.chitForm.patchValue(this.data);
  }

  ngOnInit(): void {
    this.checkForValidators();
  }

  onTypeChange(ev: MatRadioChange) {
    this.selectedChitType = ev.value;
    this.checkForValidators();
  }

  checkForValidators() {
    switch (this.chitFormDetails['type'].value) {
      case this.ChitTypes.NOTE_ONLY:
        this.chitFormDetails['dueDate'].removeValidators(Validators.required);
        this.chitFormDetails['attachment'].removeValidators(
          Validators.required
        );
        break;
      case this.ChitTypes.NOTE_DATE:
        this.chitFormDetails['dueDate'].addValidators(Validators.required);
        this.chitFormDetails['attachment'].removeValidators(
          Validators.required
        );
        break;
      case this.ChitTypes.NOTE_DATE_ATTATCHMENT:
        this.chitFormDetails['dueDate'].addValidators(Validators.required);
        this.chitFormDetails['attachment'].addValidators(Validators.required);
        break;
      default:
        break;
    }
    this.chitFormDetails['dueDate'].updateValueAndValidity();
    this.chitFormDetails['attachment'].updateValueAndValidity();
  }

  get chitFormDetails() {
    return this.chitForm.controls;
  }

  onFileChange(ev: any) {
    const file = ev.target.files[0];
    if (file?.size / 1024 > 1024) {
      this._snackBar.open('File must be less than 1mb', 'Ok');
      this.chitFormDetails['attachment'].reset();
      ev.target.value = '';
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.chitFormDetails['attachment'].patchValue(reader.result);
    };
    ev.target.value = '';
  }

  onSubmit() {
    console.log(this.chitForm);
    this.chitForm.markAllAsTouched();
    if (this.chitForm.invalid) return;
    this.trimProperties();
    if (this.isEditMode) {
      this.updateDetails();
    } else {
      this.saveDetails();
    }
    this.dialogRef.close(true);
  }

  trimProperties() {
    for (let obj in this.chitForm.value) {
      if (!this.chitForm.value[obj]) {
        switch (this.chitFormDetails['type'].value) {
          case this.ChitTypes.NOTE_ONLY:
            delete this.chitForm.value['dueDate'];
            delete this.chitForm.value['attachment'];
            break;
          case this.ChitTypes.NOTE_DATE:
            delete this.chitForm.value['attachment'];
            break;
          default:
            break;
        }
      }
    }
  }

  updateDetails() {
    const chits = this.storageService.getChitDetails() || [];
    const idx = chits.findIndex(
      (item: ChitList) => item.id === this.chitFormDetails['id'].value
    );
    if (idx !== -1) {
      if (
        this.fileNameForUpdate &&
        this.chitFormDetails['type'].value ===
          this.ChitTypes.NOTE_DATE_ATTATCHMENT
      ) {
        this.chitFormDetails['attachment'].patchValue(this.fileNameForUpdate);
      }
      chits[idx] = this.chitForm.value;
    }
    this.storageService.setChitDetails(chits);
  }

  saveDetails() {
    const chits = this.storageService.getChitDetails() || [];
    chits.push({
      ...this.chitForm.value,
      randomColor: this.commonFunctions.getRandomColor(),
    });
    this.storageService.setChitDetails(chits);
  }

  onDelete(){
    const chits = this.storageService.getChitDetails() || [];
    const idx = chits.findIndex(
      (item: ChitList) => item.id === this.chitFormDetails['id'].value
    );
    chits.splice(idx,1)
    this.storageService.setChitDetails(chits);
    this.dialogRef.close()
  }
}
