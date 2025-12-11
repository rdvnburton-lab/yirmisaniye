import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../admin.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ToolbarModule } from 'primeng/toolbar';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
    selector: 'app-question-management',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        TableModule,
        ButtonModule,
        DialogModule,
        InputTextModule,
        TextareaModule,
        SelectModule,
        ToastModule,
        ConfirmDialogModule,
        ToolbarModule,
        TagModule,
        TagModule,
        DividerModule,
        RadioButtonModule
    ],
    templateUrl: './question-management.component.html',
    providers: [MessageService, ConfirmationService]
})
export class QuestionManagementComponent implements OnInit {
    questions: any[] = [];
    questionDialog: boolean = false;
    question: any = {};
    submitted: boolean = false;
    subjects: any[] = [];
    topics: any[] = [];
    filteredTopics: any[] = [];
    correctAnswerIndex: number | null = null;

    difficulties = [
        { label: 'Kolay', value: 'easy' },
        { label: 'Orta', value: 'medium' },
        { label: 'Zor', value: 'hard' }
    ];

    constructor(
        private adminService: AdminService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) { }

    ngOnInit() {
        this.loadQuestions();
        this.loadSubjectsAndTopics();
    }

    loadQuestions() {
        this.adminService.getQuestions().subscribe({
            next: (data: any[]) => this.questions = data,
            error: (err: any) => this.messageService.add({ severity: 'error', summary: 'Hata', detail: 'Sorular yüklenemedi' })
        });
    }

    loadSubjectsAndTopics() {
        this.adminService.getSubjectsAndTopics().subscribe({
            next: (data: any[]) => {
                this.subjects = data;
            },
            error: (err: any) => this.messageService.add({ severity: 'error', summary: 'Hata', detail: 'Dersler yüklenemedi' })
        });
    }

    onSubjectChange() {
        if (this.question.subject_id) {
            const selectedSubject = this.subjects.find(s => s.subject_id === this.question.subject_id);
            this.filteredTopics = selectedSubject ? selectedSubject.topics : [];
        } else {
            this.filteredTopics = [];
        }
    }

    openNew() {
        this.question = {
            options: ['', '', '', ''],
            difficulty: 'easy'
        };
        this.correctAnswerIndex = null; // Reset selection
        this.submitted = false;
        this.questionDialog = true;
    }

    editQuestion(question: any) {
        this.question = { ...question };
        // Parse options if string
        if (typeof this.question.options === 'string') {
            try {
                this.question.options = JSON.parse(this.question.options);
            } catch (e) {
                this.question.options = ['', '', '', ''];
            }
        }

        // Set correct answer index based on the string value
        if (this.question.correct_answer) {
            this.correctAnswerIndex = this.question.options.indexOf(this.question.correct_answer);
        } else {
            this.correctAnswerIndex = null;
        }

        // Find subject for the topic
        const subject = this.subjects.find(s => s.topics.some((t: any) => t.topic_id === this.question.topic_id));
        if (subject) {
            this.question.subject_id = subject.subject_id;
            this.filteredTopics = subject.topics;
        }

        this.questionDialog = true;
    }

    deleteQuestion(question: any) {
        this.confirmationService.confirm({
            message: 'Bu soruyu silmek istediğinize emin misiniz?',
            header: 'Onay',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.adminService.deleteQuestion(question.question_id).subscribe({
                    next: () => {
                        this.questions = this.questions.filter(val => val.question_id !== question.question_id);
                        this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Soru silindi', life: 3000 });
                    },
                    error: () => this.messageService.add({ severity: 'error', summary: 'Hata', detail: 'Soru silinemedi' })
                });
            }
        });
    }

    hideDialog() {
        this.questionDialog = false;
        this.submitted = false;
    }

    saveQuestion() {
        this.submitted = true;

        // Map index back to string
        if (this.correctAnswerIndex !== null && this.correctAnswerIndex !== undefined) {
            this.question.correct_answer = this.question.options[this.correctAnswerIndex];
        }

        if (this.question.question_text?.trim() && this.question.correct_answer?.trim() && this.question.topic_id) {
            if (this.question.question_id) {
                this.adminService.updateQuestion(this.question.question_id, this.question).subscribe({
                    next: () => {
                        this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Soru güncellendi', life: 3000 });
                        this.loadQuestions();
                        this.hideDialog();
                    },
                    error: () => this.messageService.add({ severity: 'error', summary: 'Hata', detail: 'Güncelleme başarısız' })
                });
            } else {
                this.adminService.addQuestion(this.question).subscribe({
                    next: () => {
                        this.messageService.add({ severity: 'success', summary: 'Başarılı', detail: 'Soru eklendi', life: 3000 });
                        this.loadQuestions();
                        this.hideDialog();
                    },
                    error: () => this.messageService.add({ severity: 'error', summary: 'Hata', detail: 'Ekleme başarısız' })
                });
            }
        }
    }

    // Helper to track by index for primitive arrays
    trackByIndex(index: number, obj: any): any {
        return index;
    }
}
