import React from "react";

const Manager = () => {
  const showPassword = () => {
    alert("password is showing !");
  };

  return (
    <>
      <div class="absolute top-0 -z-10 h-full w-full bg-white">
        <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>
      <div className="container  flex justify-center flex-col items-center gap-5 mt-20">
        <div className="heading text-center">
          <h1 className="font-bold text-2xl">Password Manager</h1>
          <p className="text-[1.4vw]">
            Relax-{" "}
            <span className="font-semibold text-blue-600">PassVault</span> is
            here to manage to your Passwords
          </p>
        </div>
        <div className="inputs p-6">
          <input
            className="bg-blue-400 w-135 m-4 p-2 rounded-bl-2xl rounded-br-2xl"
            type="text"
            placeholder="Enter Website URL"
          />
          <div className="credentials flex">
            <div className="username">
              <input
                className="bg-amber-50 m-3 p-1.5 w-82 rounded-l-2xl rounded-r-2xl "
                type="text"
                placeholder="Enter Username"
              />
            </div>
            <div className="pass">
              <input
                className="bg-amber-50 m-3 p-1.5 2-30  rounded-l-2xl rounded-r-2xl"
                type="text"
                placeholder="Enter Password"
              />
              <lord-icon
                src="https://cdn.lordicon.com/dicvhxpz.json"
                trigger="hover"
                className="absolute right-93 top-82 cursor-pointer"
                onclick={showPassword}
              ></lord-icon>
            </div>
          </div>
        </div>
        <button className="bg-blue-300 p-3 rounded-2xl cursor-pointer">
          <span className="font-medium">Add Password</span>
        </button>
      </div>
    </>
  );
};

export default Manager;
