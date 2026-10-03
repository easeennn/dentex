import { SelectBase } from "./FormField";
import { SERVICES } from "./appointment.data";

type Props = { id: string; value: string; onChange: (v: string) => void; error?: string };

export function ServiceSelect({ id, value, onChange, error }: Props) {
  return (
    <SelectBase
      id={id}
      value={value}
      onChange={onChange}
      error={error}
      placeholder="Select a service"
      options={SERVICES}
    />
  );
}
