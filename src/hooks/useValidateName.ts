const useValidateName = (value: string) => {
  if (value.length === 0) {
    return "نام و نام خانوادگی را وارد کنید";
  } else if (!/^[آ-ی ء چ]+$/.test(value)) {
    return "اسم خود را به فارسی وارد کنید";
  } else if (value.length < 6) {
    return "نام و نام خانوادگی باید حدقل دارای 6 کاراکتر باشد";
  } else if (value.length > 16) {
    return "نام و نام خانوادگی باید  حداکثر 16 کاراکتر باشد";
  } else {
    return true;
  }
};
export default useValidateName ;