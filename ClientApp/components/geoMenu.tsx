import "../css/platformManager.css";
import * as React from "react";
import { Menu, Icon, Switch, Tooltip } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export interface GeoMenuProps {
    menuOptions?: any;
    onClick?: (key: string) => void;
}

export interface GeoMenuState {
    openKeys?: Array<any>;
    currentKey?: any;
}

/**
 * GeoMenu
 */
export class GeoMenu extends React.Component<GeoMenuProps, GeoMenuState> {
    constructor(props: GeoMenuProps, state: GeoMenuState) {
        super(props);
        this.state = {
            openKeys: [],
            currentKey: ["China"]
        };
    }

    componentDidMount() {

    }


    private onClickHandler(info) {
        this.props.onClick(info.key);
        this.setState({ currentKey: [info.key] });
    }

    private options = [{
        children: [
            {
                key: "China",
                title: "辉煌中国主题展",
                icon: "github",
            }, {
                key: "BeautifulCountry",
                title: "大好河山",
                icon: "user"
            }, {
                key: "AmazingChina",
                title: "辉煌十年",
                icon: "team"
            }]
    }
    ];


    onOpenChange = (openKeys) => {
        let state = this.state;
        let latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
        let latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

        let nextOpenKeys = [];
        if (latestOpenKey) {
            nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }
        if (latestCloseKey) {
            nextOpenKeys = this.getAncestorKeys(latestCloseKey);
        }
        this.setState({ openKeys: nextOpenKeys });
    }

    getAncestorKeys = (key) => {
        const map = {
        };
        return map[key] || [];
    }

    render() {
        let self = this;
        let browserHeight = $(window).height(); //浏览器可视高度
        let browserWidth = $(window).width(); //浏览器可视宽度
        let currentModule;
        return (
            <div className="scroll-1" style={{ overflowY: "auto", position: "relative", bottom: "0px", height: browserHeight - 50, width: "230px", backgroundColor: "#232d3c" }}>
                <Menu
                    style={{ width: "100%", backgroundColor: "#42485b" }}
                    mode='inline'
                    theme={"dark"}
                    openKeys={this.state.openKeys}
                    selectedKeys={this.state.currentKey}
                    onOpenChange={this.onOpenChange.bind(this)}
                    onClick={this.onClickHandler.bind(this)}
                >
                    {
                        this.options.map((option, i) => {
                            return (
                                (option.children).map((children, j) => {
                                    return (
                                        <Menu.Item key={children.key}>
                                            {<Icon type={children.icon} />}
                                            {children.title}
                                        </Menu.Item>
                                    );
                                })
                            );
                        })
                    }
                </Menu>
            </div>
        );
    }
}