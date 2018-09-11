const searchBox = {
    // style: 'false',
     display: 'flex',
     flexDirection: 'row',
     minWidth: '350px',
     maxWidth: '800px',
    
}

const algoliaStyles = {
    style: 'false',
    display: 'none',
}

const imputIconsBox = {
    flexGrow: '1',
    position: 'relative',
}
const buttonSearch = {
    flexGrow: '0',
     width: '70px',
     height: '35px',
     padding: '5px',
     border: '0px',
     background: '#CA1C24',
     color: 'white',
     textTransform: 'uppercase',
     left: '-66px'

}
const IconsBox = {
    position: 'absolute',
    right: '0%',
    top: '7px',
    cursor: 'pointer',
}
const placeIconBox = {
    display: 'inline-block',
    verticalAlign: 'middle',
    paddingRight:'15px',
    height:'18px',
    width:'18px',
}

const mapIconBox = {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight:'20px',
    height:'18px',
    width:'18px',
}

const inputBox = {
    height: '35px',
    padding: '8px',
    backgroundColor: '#EFF2F7',
    border: '0px solid #EFF2F7',
}












export { algoliaStyles,searchBox, imputIconsBox, buttonSearch, placeIconBox, mapIconBox, IconsBox, inputBox };