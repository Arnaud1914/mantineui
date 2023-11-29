import { Autocomplete} from "@mantine/core";
import { useState} from "react";
export function AutocompleteComponent(){

    const [value, setValue] = useState('');
    const data =
        value.trim().length > 0 && !value.includes('@')
            ? ['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => `${value}@${provider}`)
            : [];

    return (
        <Autocomplete
            value={value}
            onChange={setValue}
            label="Email"
            placeholder="Start typing to see options"
            data={data}
        />
    );
}