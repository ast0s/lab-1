import React, {useState} from 'react';

const Form = () => {
    const [name, setName] = useState("");
    const [area, setArea] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log(name);
        console.log(area);
    }

    const onNameChange = (e) => setName(e.target.value);

    const onAreaChange = (e) => setArea(e.target.value);

    return (
        <div>
            <form className="mt-20 bg-black p-5 flex flex-col w-60 gap-5 mx-auto" onSubmit={handleSubmit}>
                <label className="text-white">
                    Ім'я:
                    <input className="w-48 text-black" placeholder="Name" value={name} onChange={onNameChange}/>
                </label>

                <label className="text-white">
                    Текст:
                    <textarea className="w-48 text-black"
                              value={area}
                              onChange={onAreaChange}/>
                </label>

                <button type="submit" className="bg-white">Submit</button>
            </form>
        </div>
    );
};

export default Form;