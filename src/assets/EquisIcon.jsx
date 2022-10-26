export const EquisIcon = (props) => {
    return (
        <svg visibility={props.visibility} width={props.width} height={props.height} viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.3521 19.0759C22.2114 19.9743 22.2114 21.4297 21.3521 22.328C20.9259 22.7772 20.3622 23 19.7985 23C19.2347 23 18.6724 22.7754 18.2435 22.3262L10.9991 14.7566L3.75552 22.3244C3.32587 22.7772 2.76285 23 2.19983 23C1.63681 23 1.07448 22.7772 0.644481 22.3244C-0.214827 21.4261 -0.214827 19.9707 0.644481 19.0723L7.89016 11.4973L0.644481 3.92587C-0.214827 3.0275 -0.214827 1.57214 0.644481 0.673775C1.50379 -0.224592 2.89587 -0.224592 3.75518 0.673775L10.9991 8.2524L18.2448 0.677369C19.1041 -0.220998 20.4962 -0.220998 21.3555 0.677369C22.2148 1.57574 22.2148 3.03109 21.3555 3.92946L14.1098 11.5045L21.3521 19.0759Z" 
            fill={props.colorFill || "white"}/>
        </svg>
    )
}