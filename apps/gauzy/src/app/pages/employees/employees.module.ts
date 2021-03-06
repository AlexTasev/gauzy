import { InviteGuard } from './../../@core/role/invite.guard';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
	NbBadgeModule,
	NbButtonModule,
	NbCardModule,
	NbCheckboxModule,
	NbDialogModule,
	NbIconModule,
	NbInputModule,
	NbRouteTabsetModule,
	NbSelectModule,
	NbSpinnerModule,
	NbTooltipModule,
	NbActionsModule
} from '@nebular/theme';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { OrganizationsService } from '../../@core/services/organizations.service';
import { EmployeeEndWorkModule } from '../../@shared/employee/employee-end-work-popup/employee-end-work.module';
import { EmployeeMutationModule } from '../../@shared/employee/employee-mutation/employee-mutation.module';
import { ImageUploaderModule } from '../../@shared/image-uploader/image-uploader.module';
import { InviteMutationModule } from '../../@shared/invite/invite-mutation/invite-mutation.module';
import { InviteTableModule } from '../../@shared/invite/invites/invites.module';
import { ThemeModule } from '../../@theme/theme.module';
import { EditEmployeeMainComponent } from './edit-employee/edit-employee-profile/edit-employee-main/edit-employee-main.component';
import { EditEmployeeProfileComponent } from './edit-employee/edit-employee-profile/edit-employee-profile.component';
import { EditEmployeeRatesComponent } from './edit-employee/edit-employee-profile/edit-employee-rate/edit-employee-rate.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { ManageEmployeeInviteComponent } from './manage-employee-invite/manage-employee-invite.component';
import { EmployeeAverageBonusComponent } from './table-components/employee-average-bonus/employee-average-bonus.component';
import { EmployeeAverageExpensesComponent } from './table-components/employee-average-expenses/employee-average-expenses.component';
import { EmployeeAverageIncomeComponent } from './table-components/employee-average-income/employee-average-income.component';
import { EmployeeBonusComponent } from './table-components/employee-bonus/employee-bonus.component';
import { EmployeeFullNameComponent } from './table-components/employee-fullname/employee-fullname.component';
import { EmployeeWorkStatusComponent } from './table-components/employee-work-status/employee-work-status.component';
import { RecurringExpenseDeleteConfirmationModule } from '../../@shared/expenses/recurring-expense-delete-confirmation/recurring-expense-delete-confirmation.module';
import { EditEmployeeDepartmentComponent } from './edit-employee/edit-employee-profile/edit-employee-department/edit-employee-department.component';
import { EditEmployeeMembershipFormModule } from '../../@shared/employee/edit-employee-membership-form/edit-employee-membership-form.module';
import { EditEmployeeProjectsComponent } from './edit-employee/edit-employee-profile/edit-employee-projects/edit-employee-projects.component';
import { EditEmployeeClientComponent } from './edit-employee/edit-employee-profile/edit-employee-client/edit-employee-client.component';
import { RecurringExpenseMutationModule } from '../../@shared/expenses/recurring-expense-mutation/recurring-expense-mutation.module';

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const COMPONENTS = [
	EmployeesComponent,
	EmployeeBonusComponent,
	EmployeeAverageIncomeComponent,
	EmployeeAverageExpensesComponent,
	EmployeeAverageBonusComponent,
	EmployeeFullNameComponent,
	EmployeeWorkStatusComponent,
	EditEmployeeComponent,
	EditEmployeeProfileComponent,
	EditEmployeeMainComponent,
	EditEmployeeRatesComponent,
	ManageEmployeeInviteComponent,
	EditEmployeeDepartmentComponent,
	EditEmployeeProjectsComponent,
	EditEmployeeClientComponent
];

@NgModule({
	imports: [
		EmployeesRoutingModule,
		ThemeModule,
		NbCardModule,
		FormsModule,
		ReactiveFormsModule,
		NbButtonModule,
		NbInputModule,
		NbIconModule,
		Ng2SmartTableModule,
		NbDialogModule.forChild(),
		EmployeeMutationModule,
		EmployeeEndWorkModule,
		NbTooltipModule,
		NgSelectModule,
		NbSelectModule,
		RecurringExpenseMutationModule,
		ImageUploaderModule,
		NbBadgeModule,
		NbRouteTabsetModule,
		NbCheckboxModule,
		TranslateModule.forChild({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		}),
		NbSpinnerModule,
		InviteMutationModule,
		InviteTableModule,
		RecurringExpenseDeleteConfirmationModule,
		NbActionsModule,
		EditEmployeeMembershipFormModule
	],
	declarations: [...COMPONENTS],
	entryComponents: [
		EmployeeBonusComponent,
		EmployeeAverageIncomeComponent,
		EmployeeAverageExpensesComponent,
		EmployeeAverageBonusComponent,
		EmployeeFullNameComponent,
		EmployeeWorkStatusComponent,
		ManageEmployeeInviteComponent
	],
	providers: [OrganizationsService, InviteGuard]
})
export class EmployeesModule {}
