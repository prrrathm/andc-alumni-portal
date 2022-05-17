import styles from "../../styles/Home.module.css";

export const Numbers = () => {
  return (
    <div className="grid w-100 grid-cols-1 md:grid-cols-4 gap-8 py:5 md:py-10 py:2 md:px-6 md:5 md:mx-20 items-center justify-center" >
      <h1 className="font-black text-3xl mx-20">Our numbers tell more about ourselves.</h1>
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