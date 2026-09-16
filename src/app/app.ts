import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Color } from '@models/enums';
import { TooltipPosition } from '@models/enums/tooltip';
import { ICheckbox } from '@models/interfaces/checkbox';
import { IIcon } from '@models/interfaces/icon';
import { IOption } from '@models/interfaces/select';
import { ThemeService } from '@shared/services/theme.service';
import { DATA_VISUALIZATION, EMOTICON, FOOD_DRINK, INTERFACE_INTERACTION, USERS_PEOPLE } from '@shared/constants/icons';
import { Button } from './components/buttons/button/button';
import { ButtonIcon } from './components/buttons/button-icon/button-icon';
import { ButtonFloatingAction } from './components/buttons/button-floating-action/button-floating-action';
import { Checkbox } from './components/controls/checkbox/checkbox';
import { CheckboxItem } from './components/controls/checkbox-item/checkbox-item';
import { Radio } from './components/controls/radio/radio';
import { RadioItem } from './components/controls/radio-item/radio-item';
import { Switch } from './components/controls/switch/switch';
import { Select } from './components/form-elements/select/select';
import { TextFieldIcon } from './components/form-elements/text-field-icon/text-field-icon';
import { TextField } from './components/form-elements/text-field/text-field';
import { TextFieldGroup } from './components/form-elements/text-field-group/text-field-group';
import { TextBox } from './components/form-elements/text-box/text-box';
import { TextBoxGroup } from './components/form-elements/text-box-group/text-box-group';
import { Toast } from './components/information/toast/toast';
import { Image } from './components/media/image/image';
import { Icon } from './components/media/icon/icon';
import { RowItem } from './components/list/row-item/row-item';
import { RowMessage } from './components/list/row-message/row-message';
import { Badge } from './components/labels/badge/badge';
import { Tag } from './components/labels/tag/tag';
import { TooltipDirective } from './shared/directives/tooltip.directive';

@Component({
  imports: [
    RouterOutlet, ReactiveFormsModule, FormsModule, TooltipDirective, Button, ButtonIcon, ButtonFloatingAction, Checkbox, CheckboxItem, Radio,
    RadioItem, Switch, Select, TextFieldIcon, TextField, TextFieldGroup, TextBox, TextBoxGroup, Toast, Image, Icon, RowItem, RowMessage, Badge, Tag
  ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Paper');
  protected readonly theme = inject(ThemeService);
  protected readonly label = signal('This is your label');
  userIcon: IIcon = USERS_PEOPLE.user;
  searchIcon: IIcon = INTERFACE_INTERACTION.search;
  bookmarkFullIcon: IIcon = INTERFACE_INTERACTION.bookmarkFull;
  archiveIcon: IIcon = INTERFACE_INTERACTION.archive;
  confusedIcon: IIcon = EMOTICON.confused;
  glassIcon: IIcon = FOOD_DRINK.glass;
  pizzaSliceIcon: IIcon = FOOD_DRINK.pizzaSlice;
  utensilsIcon: IIcon = FOOD_DRINK.utensils;
  gridIcon: IIcon = DATA_VISUALIZATION.grid;
  options: IOption[] = [
    {
      label: 'Option 1',
      value: '1'
    },
    {
      label: 'Option 2',
      value: '2'
    },
    {
      label: 'Option 3',
      value: '3'
    },
  ];
  color: typeof Color = Color;
  position: typeof TooltipPosition = TooltipPosition;

  isChecked = false;
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      acceptTerms: [false]
    });

    // Escuchar cambios
    this.myForm.get('acceptTerms')?.valueChanges.subscribe(value => {
      console.log('Form value changed:', value);
    });
  }

  onCheckboxChange(event: ICheckbox): void {
    this.isChecked = event.checked;
    console.log('Checkbox changed:', event);
  }

  change(value: string, type: boolean): void {
    this.title.set(`paper ${value}` + (type ? ' radio' : ' radio-item'));
  }

  action(): void {
    this.label.set(this.label.length <= 20 ? 'This is your action label' : 'This is your Label');
  }
}
