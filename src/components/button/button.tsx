import PropTypes from "prop-types";

const Button = (props: any) => {
  return (
    <button
      className="font-sans cursor-pointer"
      //   onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </button>
  );
};

export const OutlineButton = (props: any) => {
  return (
    <Button
      className={`btn_outline ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </Button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export const ButtonMask1 = (props: any) => {
  return (
    <div className="absolute bg-white hover:shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] border border-white hover:border-[#040b14] hover:border-[1px] rounded-lg w-40 h-16 overflow-hidden font-sans font-light text-[1.5rem] tracking-[1px] transition-all duration-500">
      <span className="absolute flex justify-center items-center m-auto w-full h-full overflow-hidden font-sans font-bold text-[#040b14] text-[1.5rem] text-center">
        {props.children}
      </span>
      <button
        id="work"
        type="button"
        name="Hover"
        className="w-full h-full font-sans font-bold text-[1.5rem] tracking-[1px] animate-[ani2_0.7s_steps(22)_forwards] hover:animate-[ani_0.7s_steps(22)_forwards] cursor-pointer"
        // onClick={props.onClick ? () => props.onClick() : null}
      >
        {props.children}
      </button>
    </div>
  );
};

export const ButtonMask2 = (props: any) => {
  return (
    <div className="absolute bg-white hover:shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] mt-[8vh] border hover:border-[#040b14] hover:border-[1px] border-black rounded-lg w-40 h-16 overflow-hidden font-sans font-light tracking-[1px] transition-all duration-500">
      <span className="absolute flex justify-center items-center m-auto w-full h-full overflow-hidden font-sans font-bold text-[#040b14] text-[1.5rem] text-center cursor-pointer">
        {props.children}
      </span>
      <button
        id="work"
        type="button"
        name="Hover"
        className="w-full h-full font-bold text-[1.5rem] tracking-[1px] animate-[ani2_0.7s_steps(70)_forwards] hover:animate-[ani_0.7s_steps(70)_forwards] cursor-pointer"
        // onClick={props.onClick ? () => props.onClick() : null}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
