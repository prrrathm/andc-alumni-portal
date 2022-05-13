import styles from "../../styles/Home.module.css";

export const Numbers = () => {
  return (
    <div className="flex w-100 flex-row py-10 px-6 mx-20" >
      <h1 className="font-black text-3xl">Our numbers tell more about ourselves.</h1>
      <div className="mx-20 w-50 text-xl">
        <h1 className="font-black text-sky-900">50,000+ </h1>
        Graduates
      </div>
      <div className="mx-20 w-80 text-xl">
        <h1 className="font-black text-sky-900">1,000+ </h1>
        Post Graduates
      </div>
      <div className="mx-20 w-50 text-xl">
        <h1 className="font-black text-sky-900">200+ </h1>
        PhDs
      </div>
    </div>
  );
};