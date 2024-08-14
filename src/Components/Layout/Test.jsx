import React, { useState } from 'react';

const CheckboxComponent = () => {
    const [checkedItems, setCheckedItems] = useState([]);
    const [checkboxState, setCheckboxState] = useState({});

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        // const checked = e.target.checked;
        if(checked){
            console.log("success");
            
        }else{
            console.log("error");
            
        }
        // Cập nhật trạng thái checkbox
        setCheckboxState(prevState => ({
            ...prevState,
            [name]: checked
        }));

        if (checked) {
            // Thêm dữ liệu vào danh sách khi checkbox được chọn
            setCheckedItems(prevItems => [...prevItems, name]);
            console.log("tao la if",checkedItems);
        } else {
            // Xóa dữ liệu khỏi danh sách khi checkbox bị bỏ chọn
            setCheckedItems(prevItems => prevItems.filter(item => item !== name));
            console.log("tao la else",checkedItems);
        }
        console.log(checkedItems);
    };

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    name="item1"
                    checked={checkboxState["item1"] || false}
                    onChange={handleCheckboxChange}
                />
                Item 1
            </label>
            <label>
                <input
                    type="checkbox"
                    name="item2"
                    checked={checkboxState["item2"] || false}
                    onChange={handleCheckboxChange}
                />
                Item 2
            </label>
            <label>
                <input
                    type="checkbox"
                    name="item3"
                    checked={checkboxState["item3"] || false}
                    onChange={handleCheckboxChange}
                />
                Item 3
            </label>
            <div>
                <h3>Selected Items:</h3>
                <ul>
                    {checkedItems.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CheckboxComponent;
