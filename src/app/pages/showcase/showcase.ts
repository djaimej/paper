import { ChangeDetectionStrategy, Component, viewChildren, inject, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Color } from '@models/enums';
import { TooltipPosition } from '@models/enums/tooltip';
import { IOption } from '@models/interfaces/select';
import { DATA_VISUALIZATION, EMOTICON, FOOD_DRINK, INTERFACE_INTERACTION, USERS_PEOPLE } from '@shared/constants/icons';
import { ThemeService } from '@shared/services/theme.service';
import { ToastService } from '@shared/services/toast.service';
import { ShowcaseSection } from './showcase-section/showcase-section';
import { CodeBlock } from './code-block/code-block';
import { Button, ButtonIcon, ButtonFloatingAction } from '@components/buttons';
import { Checkbox, CheckboxItem, Radio, RadioItem, Switch } from '@components/controls';
import { Select, TextField, TextFieldIcon, TextFieldGroup, TextBox, TextBoxGroup } from '@components/form-elements';
import { Badge, Tag } from '@components/labels';
import { RowItem, RowMessage } from '@components/list';
import { Icon, Image } from '@components/media';
import { TooltipDirective } from '@shared/directives/tooltip.directive';

@Component({
  selector: 'app-showcase',
  imports: [
    ReactiveFormsModule, FormsModule, TooltipDirective, ShowcaseSection,
    Button, ButtonIcon, ButtonFloatingAction, Checkbox, CheckboxItem, Radio, RadioItem,
    Switch, Select, TextField, TextFieldIcon, TextFieldGroup, TextBox, TextBoxGroup,
    Badge, Tag, Image, Icon, RowItem, RowMessage,
  ],
  templateUrl: './showcase.html',
  styleUrl: './showcase.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Showcase {
  protected readonly title = signal('Paper');
  protected readonly theme = inject(ThemeService);
  protected readonly sections = viewChildren(ShowcaseSection);
  protected readonly toast = inject(ToastService);

  protected readonly color = Color;
  protected readonly position = TooltipPosition;

  protected readonly userIcon = USERS_PEOPLE.user;
  protected readonly searchIcon = INTERFACE_INTERACTION.search;
  protected readonly bookmarkFullIcon = INTERFACE_INTERACTION.bookmarkFull;
  protected readonly archiveIcon = INTERFACE_INTERACTION.archive;
  protected readonly confusedIcon = EMOTICON.confused;
  protected readonly glassIcon = FOOD_DRINK.glass;
  protected readonly pizzaSliceIcon = FOOD_DRINK.pizzaSlice;
  protected readonly utensilsIcon = FOOD_DRINK.utensils;
  protected readonly gridIcon = DATA_VISUALIZATION.grid;

  protected readonly options: IOption[] = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  protected readonly myForm = inject(FormBuilder).group({ deploy: [false] });

  protected readonly buttonsCode =
    `<app-button size="lg">Solid</app-button>
<app-button size="lg" variant="outline">Outline</app-button>
<app-button size="lg" variant="ghost">Ghost</app-button>
<app-button>Medium</app-button>
<app-button size="sm">Small</app-button>`;

  protected readonly iconButtonsCode =
    `<app-button-icon size="lg" [icon]="archiveIcon"></app-button-icon>
<app-button-icon variant="outline" [icon]="userIcon"></app-button-icon>
<app-button-icon size="sm" variant="ghost" [icon]="bookmarkFullIcon">&nbsp;Bookmark</app-button-icon>

<app-button-floating-action [icon]="userIcon"></app-button-floating-action>`;

  protected readonly selectionControlsCode =
    `<app-checkbox [id]="'cb'">&nbsp;Simple</app-checkbox>
<form [formGroup]="myForm">
  <app-checkbox-item formControlName="deploy" label="Deploy to production"></app-checkbox-item>
</form>

<app-radio [id]="'r4'" value="1" [name]="'paper-radio'"></app-radio>
<app-radio [id]="'r5'" value="2" [name]="'paper-radio'"></app-radio>
<app-radio-item [id]="'ri0'" [label]="'Name me'" value="1" [name]="'paper-radio-item'"></app-radio-item>`;

  protected readonly formFieldsCode =
    `<app-select [id]="'s7'" [options]="options"></app-select>

<app-text-field-icon [id]="'8'" [icon]="searchIcon" [placeholder]="'Search'"></app-text-field-icon>
<app-text-field [id]="'9'" [placeholder]="'Lorem ipsum'"></app-text-field>
<app-text-field-group [id]="'10'" [hint]="'Hint'" [label]="'label'" [maxLength]="32" [placeholder]="'Lorem ipsum'"></app-text-field-group>

<app-text-box [id]="'11'" [placeholder]="'Lorem ipsum'"></app-text-box>
<app-text-box-group [id]="'12'" [hint]="'Hint'" [label]="'label'" [maxLength]="32" [placeholder]="'Lorem ipsum'"></app-text-box-group>`;

  protected readonly toastCode =
    `<app-button (clicked)="toast.show('No more paper!')">Show toast</app-button>`;

  protected readonly labelsCode =
    `<app-badge [icon]="glassIcon" [text]="'Drink'"></app-badge>
<app-badge [icon]="pizzaSliceIcon" [text]="'Food'" [type]="'white'"></app-badge>
<app-badge [icon]="utensilsIcon" [text]="'Salad'" [type]="'black'"></app-badge>

<app-tag [text]="'You can hide me!'" [dismissible]="true"></app-tag>
<app-tag [text]="'Hide me'" [type]="'black'" [dismissible]="true"></app-tag>
<app-tag [text]="'Tag'"></app-tag>
<app-tag [text]="'Another Tag'" [type]="'black'"></app-tag>`;

  protected readonly mediaCode =
    `<div style="max-width: 120px"><app-image [ratio]="3 / 4" src="images/placeholder.png" /></div>
<div style="width: 120px"><app-image type="circle" /></div>

<app-icon size="sm"></app-icon>
<app-icon></app-icon>
<app-icon size="lg"></app-icon>`;

  protected readonly listCode =
    `<app-row-item [label]="title()" [description]="'This is your description'" [action]="'edit'"></app-row-item>
<app-row-item [label]="'This is your label'" [description]="'This is your description'" [action]="'edit'" [icon]="userIcon"></app-row-item>
<app-row-item [label]="'This is your label'" [description]="'This is your description'" [action]="'edit'" [icon]="userIcon" [padding]="true"></app-row-item>
<app-row-item [label]="'This is your label'" [description]="'This is your description'" [padding]="true"></app-row-item>

<app-row-message [label]="'Message Label'" [description]="'Message description'" [date]="'date'"></app-row-message>
<app-row-message [label]="'Message Label'" [description]="'No date'"></app-row-message>
<app-row-message [label]="'No description'" [date]="'date'"></app-row-message>`;

  protected readonly tooltipCode =
    `<b [color]="color.BLACK" [position]="position.RIGHT" [tooltip]="'Lorem...'">Hover me Right</b>
<b [color]="color.WHITE" [position]="position.DYNAMIC" [tooltip]="'Lorem...'">Hover me Dynamic</b>
<b [color]="color.BLACK" [position]="position.BELOW" [tooltip]="'Lorem...'">Hover me Below</b>
<b [color]="color.WHITE" [position]="position.LEFT" [tooltip]="'Lorem...'">Hover me Left</b>
<b [color]="color.BLACK" [position]="position.ABOVE" [tooltip]="'Lorem...'">Hover me Above</b>`;

}
