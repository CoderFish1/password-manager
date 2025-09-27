import React from "react";
import { useState, useEffect, useRef } from "react";

const Manager = () => {

 const passwordRef = useRef();


  const showPassword = () => {
    if(passwordRef.current.type = "password"){
      passwordRef.current.type = "text"
    }
    else if(passwordRef.current.type = "text"){
      passwordRef.current.type = "password"
    }
  };

  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const savePassword = () => {
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);
  };

  return (
    <div className="relative">
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>

      <div className="container  flex justify-center flex-col items-center gap-5 mt-20">
        <div className="heading text-center">
          <h1 className="font-bold text-4xl font-bitcount">Password Manager</h1>
          <p className="text-[1.4vw]">
            Relax
            <span className="font-semibold text-blue-600"> PassVault</span> is
            here to manage to your Passwords
          </p>
        </div>
        <div className="inputs p-6">
          <input
            value={form.site}
            onChange={handleChange}
            className="bg-blue-400 w-135 m-4 p-2 rounded-bl-2xl rounded-br-2xl"
            type="text"
            name="site"
            placeholder="Enter Website URL"
          />
          <div className="credentials flex">
            <div className="username">
              <input
                value={form.username}
                onChange={handleChange}
                className="bg-amber-50 m-3 p-1.5 w-82 rounded-l-2xl rounded-r-2xl"
                type="text"
                name="username"
                placeholder="Enter Username"
              />
            </div>
            <div className="pass relative">
              <input
                value={form.password}
                ref={passwordRef}
                onChange={handleChange}
                className="bg-amber-50 m-3 p-1.5 2-30  rounded-l-2xl rounded-r-2xl"
                type="password"
                name="password"
                placeholder="Enter Password"
              />
              <lord-icon 
                src="https://cdn.lordicon.com/dicvhxpz.json"
                trigger="hover"
                className="absolute right-3.5 top-3.5 cursor-pointer"
                onclick={showPassword}
              ></lord-icon>
            </div>
          </div>
        </div>
        <button
          className="relative bg-blue-300 p-3 pl-8 rounded-2xl cursor-pointer hover:bg-blue-400"
          onClick={savePassword}
        >
          <lord-icon
            src="https://cdn.lordicon.com/jectmwqf.json"
            trigger="hover"
            className="absolute left-0 top-2"
          ></lord-icon>
          <span className="font-medium">Add Password</span>
        </button>

        <div className="viewPassword">
          <h1 className="text-[1.5vw] font-semibold py-2">Your Passwords</h1>
          {passwordArray.length === 0 && (
            <div className="text-center font-mono">No Passwords added !!!</div>
          )}
          {passwordArray.length != 0 && (
            <div class="overflow-x-auto">
              <table class="w-full text-left table-auto">
                <thead>
                  <tr class="bg-gray-100">
                    <th class="px-4 py-2">Site URL</th>
                    <th class="px-4 py-2">Username</th>
                    <th class="px-4 py-2">Password</th>
                  </tr>
                </thead>
                {passwordArray.map((item, index) => {
                  return (
                    <tbody key={index}>
                      <tr>
                        <td class="w-[25vw] px-4 py-2">
                          <a href={item.site} target="_blank">
                            {item.site}
                          </a>
                        </td>
                        <td class=" w-[20vw] px-4 py-2">{item.username}</td>
                        <td class=" w-[15vw] px-4 py-2">{item.password}</td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          )}
        </div>
      </div>
      <div className="footer font-cedarville fixed text-xl bottom-2">Created by <span className="font-bold">Shrey</span> with 💻 </div>
    </div>
  );
};

export default Manager;
