
function InputBox( {
    name = "",
    amount,
    setAmount,
    currency = '',
    setOption,
    options = {select},
    isDisabled = false
} ){

    const optionList = options.map((option, index) => {
        return (
            <option 
                key={index}
            > {option.toUpperCase()} </option>
        );
    });

    return (
        <>
            <div className="container p-5 bg-white shadow-sm border border-light rounded-3">
                <div className="row mb-4 text-center">
                    <div className="col-md-5">
                        <label className="form-label fs-5 text-primary"> {name.toUpperCase()} </label>
                    </div>
                    <div className="col-md-2 d-none d-md-block"></div>
                    <div className="col-md-5">
                        <label className="form-label fs-5 text-primary"> Currency </label>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-md-5">
                        <input 
                            className="form-control form-control-lg"
                            type="number" 
                            name={name} 
                            value={amount}
                            step={'0.001'}
                            onChange={(e) => setAmount(e.target.value)} 
                            disabled={isDisabled} 
                            placeholder="Enter amount"
                        />
                    </div>
                    <div className="col-md-2 d-none d-md-block"></div>
                    <div className="col-md-5">
                        <select 
                            className="form-select form-select-lg"
                            onChange={(e) => setOption(e.target.value)}
                            value={currency}
                        >
                            {optionList}
                        </select>
                    </div>
                </div>
            </div>

        </>
    );
}


export default InputBox;