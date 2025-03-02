import React, { useState } from 'react';
import axios from 'axios';

export default function Converter() {

  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  function handleInput(val) {
    axios({
      url: "http://localhost:8081/convert",
      method: "POST",
      data: { "numberString": input }
    }).then(res => {
      setOutput(res.data)
    }).catch((err) => { console.log(err) });
  }

  return (
    <div className='container-sm justify-content-center align-items-center' style={{ width: 450, padding: 50 }}>
      <div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">$</span>
          <input type="text"
            value={input}
            onChange={i => setInput(i.target.value)}
            className="form-control"
            placeholder="Enter an amount eg. 123.45"
            aria-label="Amount"
            aria-describedby="basic-addon1" />
          <button
            type='button'
            // width='12'
            className='btn btn-primary'
            onClick={handleInput}>
            convert
          </button>
        </div>
        <div><text>{output}</text></div>
      </div>
    </div>
  );
}