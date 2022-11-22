export const _ReadPost = ({ id, logo, name, val }: any) => {
    return (
        <div key={id}>
            <label key={id}><input type='checkbox' />
                <i className={logo}></i> <kbd>{name}</kbd></label>
        </div>
    )
}