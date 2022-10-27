export const AddIcon = (props) => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="10" fill={props.fill} stroke="#EAB686" strokeWidth="2"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 5C12 4.44772 11.5523 4 11 4C10.4477 4 10 4.44772 10 5V10H5C4.44772 10 4 10.4477 4 11C4 11.5523 4.44772 12 5 12H10V17C10 17.5523 10.4477 18 11 18C11.5523 18 12 17.5523 12 17V12H17C17.5523 12 18 11.5523 18 11C18 10.4477 17.5523 10 17 10H12V5Z"
        fill={props.fill == "#EAB686" ? "#FFFFFF" :"#EAB686"} />
    </svg>
)