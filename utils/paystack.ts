// export async function loadPaystackScript() {
//   if (typeof window === "undefined") return null;
//   if ((window as any).PaystackPop) return (window as any).PaystackPop;

//   return new Promise<any>((resolve) => {
//     const script = document.createElement("script");
//     script.src = "https://js.paystack.co/v1/inline.js";
//     script.onload = () => resolve((window as any).PaystackPop);
//     document.body.appendChild(script);
//   });
// }

export async function loadPaystackScript(): Promise<any> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve(null);
    if ((window as any).PaystackPop) return resolve((window as any).PaystackPop);

    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.onload = () => resolve((window as any).PaystackPop);
    document.body.appendChild(script);
  });
}
