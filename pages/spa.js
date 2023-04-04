import dynamic from "next/dynamic";

export default dynamic(() => import("../src/clientOnly"), { ssr: false });
