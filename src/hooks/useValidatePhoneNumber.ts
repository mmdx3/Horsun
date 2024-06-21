const useValidatePhoneNumber = (value: string) => {
  if (value.length === 0) {
    return "شماره تلفن را وارد کنید";
  } else if (!/^09[0-9]{9}$/.test(value)) {
    return "لطفا شماره موبایل را درست وارد کنید";
  } else {
    return true;
  }
};
export default useValidatePhoneNumber;
