import * as React from "react";
import { useState } from "react";


const Animal = React.memo(({ selected, name, onClick }) => (
    <div onClick={() => onClick(name)}>
        {`[${selected ? "X" : " "}]`} {name}
    </div>
));

const useFilter = () => {
    const [items, setItems] = useState([]);

    const onClick = React.useCallback((item) => {
        setItems((items) => {
            const ix = items.indexOf(item);
            const newItems = ix > -1 ? [...items.slice(0, ix), ...items.slice(ix + 1)] : [...items, item];
            return newItems;
        });
    }, []);
    const isSelected = (item) => items.indexOf(item) > -1;
    return { items, onClick, isSelected };
};

const List = () => {
    const { items, onClick, isSelected } = useFilter([]);
    return (
        <div>
            <ul>
                {[...Array(1000)].map((i, index) => (
                    <Animal name={index} selected={isSelected(index)} onClick={onClick} key={index} />
                ))}
            </ul>
            <div>Selected: {items.join(", ")}</div>
        </div>
    );
};

export default List;
