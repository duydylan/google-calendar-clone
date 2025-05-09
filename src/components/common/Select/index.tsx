import { Label } from "@/components/ui/label";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  Select as SelectUI,
  SelectValue,
} from "@/components/ui/select";
import { OptionType } from "@/models/interfaces";
import FormGroup from "../FormGroup";

interface SelectProps {
  label?: string;
  name?: string;
  options: OptionType[];
  defaultValue?: string;
  value: string;
  onValueChange: (value: string) => void;
}

function Select({ label, name, options, defaultValue, value, onValueChange }: SelectProps) {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <SelectUI defaultValue={defaultValue} value={value} onValueChange={onValueChange}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectUI>
      <input type="hidden" name={name} value={value} />
    </FormGroup>
  );
}

export default Select;
