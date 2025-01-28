export default function Footer(props) {
    const {showModel, handleToggleModal, data} = props

    return (
        <footer>
            <div>
                <div className="bgGradient"></div>
                <h2>{data?.title}</h2>
                <h1>APOD PROJECT</h1>
            </div>
            <button onClick={handleToggleModal}>
            <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}