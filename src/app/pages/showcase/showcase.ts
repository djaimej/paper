import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Color } from '@models/enums';
import { TooltipPosition } from '@models/enums/tooltip';
import { IOption } from '@models/interfaces/select';
import { DATA_VISUALIZATION, EMOTICON, FOOD_DRINK, INTERFACE_INTERACTION, USERS_PEOPLE } from '@shared/constants/icons';
import { ThemeService } from '@shared/services/theme.service';
import { ToastService } from '@shared/services/toast.service';
import { ShowcaseSection } from './showcase-section/showcase-section';
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

  protected readonly myForm = inject(FormBuilder).group({ acceptTerms: [false] });
}
