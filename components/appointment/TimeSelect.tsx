import { SelectBase } from "./FormField";
import { TIME_SLOTS } from "./appointment.data";

type Props = { id: string; value: string; onChange: (v: string) => void; error?: string };

export function TimeSelect({ id, value, onChange, error }: Props) {
  return (
    <SelectBase
      id={id}
      value={value}
      onChange={onChange}
      error={error}
      placeholder="Select a time"
      options={TIME_SLOTS}
    />
  );
}
