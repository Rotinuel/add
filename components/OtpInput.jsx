'use client';
import { useState, useRef, useEffect } from 'react';

export default function OtpInput({ length=6, onChange }) {
  const [values, setValues] = useState(Array(length).fill(''));
  const inputs = useRef([]);

  useEffect(()=>{ inputs.current[0]?.focus(); }, []);

  const handleChange = (i, val) => {
    if (!/^[0-9]?$/.test(val)) return;
    const next = [...values]; next[i]=val; setValues(next);
    onChange && onChange(next.join(''));
    if (val && i<length-1) inputs.current[i+1].focus();
  };

  const handleKey = (i, e) => {
    if (e.key === 'Backspace' && !values[i] && i>0) inputs.current[i-1].focus();
  };

  return (
    <div className="flex justify-center gap-2 mb-4">
      {values.map((v,i)=>(
        <input key={i} ref={el=>inputs.current[i]=el} maxLength={1} inputMode="numeric"
          value={v} onChange={e=>handleChange(i,e.target.value)} onKeyDown={e=>handleKey(i,e)}
          className="w-10 h-12 text-center text-xl border rounded focus:ring-2 focus:ring-indigo-500" />
      ))}
    </div>
  );
}
