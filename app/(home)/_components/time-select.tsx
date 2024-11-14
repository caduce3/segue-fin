"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/app/_components/ui/select";
import { SelectTrigger } from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const MONTH_OPTIONS = [
  {
    value: "1",
    label: "Janeiro",
  },
  {
    value: "2",
    label: "Fevereiro",
  },
  {
    value: "3",
    label: "Março",
  },
  {
    value: "4",
    label: "Abril",
  },
  {
    value: "5",
    label: "Maio",
  },
  {
    value: "6",
    label: "Junho",
  },
  {
    value: "7",
    label: "Julho",
  },
  {
    value: "8",
    label: "Agosto",
  },
  {
    value: "9",
    label: "Setembro",
  },
  {
    value: "10",
    label: "Outubro",
  },
  {
    value: "11",
    label: "Novembro",
  },
  {
    value: "12",
    label: "Dezembro",
  },
];

const TimeSelect = () => {
  const { push } = useRouter();
  const handleMonthChange = (month: string) => {
    push(`/?month=${month}`);
  };

  const searchParams = useSearchParams();
  const month = searchParams.get("month");

  return (
    <Select onValueChange={(value) => handleMonthChange(value)} defaultValue={month ?? ''}>
      <SelectTrigger className="flex w-[150px] items-center justify-around rounded-full border">
        <SelectValue placeholder="Mês" />
        <ChevronDown className="h-4 w-4" />
      </SelectTrigger>
      <SelectContent>
        {MONTH_OPTIONS.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default TimeSelect;
