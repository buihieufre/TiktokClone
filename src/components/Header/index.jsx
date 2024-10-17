import message from '~/assets/icons/message.svg';
import inbox from '~/assets/icons/inbox.svg';
import avatar from '~/assets/image/avatar-placeholder.jpeg';
import logo from '~/assets/image/tiktok.png';

import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';



const searchData = ['dev lộ tin nhắn với bảo hân', 'Guitar Điện', 'hanakoishi khoe dáng', 'anh tú và lyly em đè tú ra'];
function Header() {
    const searchBoxRef = useRef();
    const tippyInstance = useRef();
    const searchInputRef = useRef();
    const [searchValue, setSearchValue] = useState('');
    const [show, setShow] = useState(false);

    const handleClearInputSearch = () => {
        setSearchValue('')
        searchInputRef.current.focus()
        setShow(false)
    }
    useEffect(() => {
        const tippyPopper = tippyInstance.current.popper;
        const parent = searchBoxRef.current;
        if (tippyPopper) {
            window.onresize = () => {
                tippyPopper.style.width = parent.offsetWidth + 'px';
            };
        }
    }, []);
    return (
        <header className="container overflow-clip max-w-full flex items-center justify-between pl-4 pr-6 min-h-[60px]">
            <div className="logo w-[300px] flex-shrink-0">
                <a href="/" className="flex items-center h-10">
                    <img src={logo} alt="" className="inline-block w-28" />
                </a>
            </div>
            <div
                className="search-box flex min-h-12 min-w-44 h-12 mx-2 rounded-full has-[:focus]:border-[1px] has-[:focus]:border-gray-400 border-[1px] border-transparent hover:border-gray-400 w-[500px] *:w-[500px] *:flex-1 max-w-500"
                ref={searchBoxRef}
            >
                <Tippy
                    visible={show}
                    interactive
                    placement="bottom"
                    onCreate={(instance) => {
                        tippyInstance.current = instance;
                    }}
                    onShow={(instance) => {
                        const parent = searchBoxRef.current;
                        const tooltip = instance.popper;
                        if (parent) {
                            tooltip.style.width = parent.offsetWidth + 'px';
                        }
                    }}
                    render={(...attrs) => {
                        return show && (
                            <div className="flex-1 search__result min-h-[500px] bg-gray-400" tabIndex="-1" {...attrs}>
                                {searchData.map((item, index) => (
                                    <div key={index}>{item}</div>
                                ))}
                            </div>
                        );
                    }}
                    onClickOutside={() => {
                        setShow(false);
                    }}
                >
                    <div className="flex-1 search-box__inner flex items-center bg-gray-100 h-full rounded-full overflow-hidden">
                        <input
                            value={searchValue}
                            onChange={(e) => {
                                setSearchValue(e.target.value);
                                setShow(true);
                            }}
                            onFocus={() => {
                                if(searchValue.length > 0 && !show){
                                    setShow(true)
                                }
                            }}
                            ref={searchInputRef}
                            type="text"
                            placeholder="Search"
                            className="peer h-full p-4 bg-transparent focus:outline-none w-full font-medium caret-orange-00"
                        />
                        <button onClick={handleClearInputSearch} className="bg-gray-400 size-4 center-item mr-1 p-1 rounded-full peer-placeholder-shown:hidden">
                            <FontAwesomeIcon icon={faXmark} fontSize="10px" className="text-white" />
                        </button>
                        <button className="hidden search-loading w-4 h-4 bg-transparent border-2 rounded-full flex-shrink-0 border-gray-800 border-l-transparent animate-spin mr-1"></button>
                        <button className=' group/search h-full flex items-center relative pr-4 pl-[12px] hover:bg-gray-200 after:content-[""] after:absolute after:w-[1px] after:bg-gray-200 after:-left-[0.5px] after:top-3 after:bottom-3 rounded-s-none rounded-full'>
                            <FontAwesomeIcon
                                icon={faSearch}
                                className="w-[18px] h-[18px] cursor-pointer text-gray-300 group-hover/search:text-gray-800"
                            />
                        </button>
                    </div>
                </Tippy>
            </div>
            <div className="action flex-shrink-0 flex items-center gap-x-3 *:flex-shrink-0">
                <button className="upload-btn flex items-center px-4 min-h-9 rounded-sm font-medium border-gray-500 border-[1px] hover:bg-gray-100">
                    <FontAwesomeIcon icon={faPlus} className="mr-2" />
                    Upload
                </button>
                <button className="message p-[3px] ml-6">
                    <img src={message} alt="" className="w-[26px] h-[26px]" />
                </button>
                <button className="inbox p-[3px]">
                    <img src={inbox} alt="" className="w-[32px] h-[32px]" />
                </button>
                <button className="profile">
                    <img src={avatar} alt="" className="avatar w-8 h-8 rounded-full" />
                </button>
            </div>
        </header>
    );
}

export default Header;
