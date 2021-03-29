/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { RouterHistory } from "@stencil/router";
export namespace Components {
    interface AppAuthLogin {
        /**
          * history instance.
         */
        "history": RouterHistory;
    }
    interface AppAuthProfile {
    }
    interface AppAuthRegister {
        /**
          * history instance.
         */
        "history": RouterHistory;
    }
    interface AppFlashMessage {
        /**
          * alert closable.
         */
        "closable": boolean;
        /**
          * Show/hide alert message
         */
        "show": boolean;
        /**
          * Message type
         */
        "type": string;
    }
    interface AppHeader {
    }
    interface AppHeaderMenu {
    }
    interface AppHeaderSearch {
    }
    interface AppHome {
    }
    interface AppLayout {
    }
    interface AppLayoutExternal {
        /**
          * history instance.
         */
        "history": RouterHistory;
    }
    interface AppLayoutInternal {
        /**
          * history instance.
         */
        "history": RouterHistory;
    }
    interface AppNotificationMenu {
    }
    interface AppPageContainer {
    }
    interface AppPageHome {
    }
    interface AppProfileMenu {
    }
    interface AppRoot {
    }
    interface AppSidebar {
    }
    interface AppSidebarD {
    }
    interface AppSidebarM {
    }
    interface AppSidebarMenuLinks {
    }
    interface AppSvg {
        "type": 'Github' | 'Twitter';
    }
    interface AppThemeToggler {
    }
}
declare global {
    interface HTMLAppAuthLoginElement extends Components.AppAuthLogin, HTMLStencilElement {
    }
    var HTMLAppAuthLoginElement: {
        prototype: HTMLAppAuthLoginElement;
        new (): HTMLAppAuthLoginElement;
    };
    interface HTMLAppAuthProfileElement extends Components.AppAuthProfile, HTMLStencilElement {
    }
    var HTMLAppAuthProfileElement: {
        prototype: HTMLAppAuthProfileElement;
        new (): HTMLAppAuthProfileElement;
    };
    interface HTMLAppAuthRegisterElement extends Components.AppAuthRegister, HTMLStencilElement {
    }
    var HTMLAppAuthRegisterElement: {
        prototype: HTMLAppAuthRegisterElement;
        new (): HTMLAppAuthRegisterElement;
    };
    interface HTMLAppFlashMessageElement extends Components.AppFlashMessage, HTMLStencilElement {
    }
    var HTMLAppFlashMessageElement: {
        prototype: HTMLAppFlashMessageElement;
        new (): HTMLAppFlashMessageElement;
    };
    interface HTMLAppHeaderElement extends Components.AppHeader, HTMLStencilElement {
    }
    var HTMLAppHeaderElement: {
        prototype: HTMLAppHeaderElement;
        new (): HTMLAppHeaderElement;
    };
    interface HTMLAppHeaderMenuElement extends Components.AppHeaderMenu, HTMLStencilElement {
    }
    var HTMLAppHeaderMenuElement: {
        prototype: HTMLAppHeaderMenuElement;
        new (): HTMLAppHeaderMenuElement;
    };
    interface HTMLAppHeaderSearchElement extends Components.AppHeaderSearch, HTMLStencilElement {
    }
    var HTMLAppHeaderSearchElement: {
        prototype: HTMLAppHeaderSearchElement;
        new (): HTMLAppHeaderSearchElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppLayoutElement extends Components.AppLayout, HTMLStencilElement {
    }
    var HTMLAppLayoutElement: {
        prototype: HTMLAppLayoutElement;
        new (): HTMLAppLayoutElement;
    };
    interface HTMLAppLayoutExternalElement extends Components.AppLayoutExternal, HTMLStencilElement {
    }
    var HTMLAppLayoutExternalElement: {
        prototype: HTMLAppLayoutExternalElement;
        new (): HTMLAppLayoutExternalElement;
    };
    interface HTMLAppLayoutInternalElement extends Components.AppLayoutInternal, HTMLStencilElement {
    }
    var HTMLAppLayoutInternalElement: {
        prototype: HTMLAppLayoutInternalElement;
        new (): HTMLAppLayoutInternalElement;
    };
    interface HTMLAppNotificationMenuElement extends Components.AppNotificationMenu, HTMLStencilElement {
    }
    var HTMLAppNotificationMenuElement: {
        prototype: HTMLAppNotificationMenuElement;
        new (): HTMLAppNotificationMenuElement;
    };
    interface HTMLAppPageContainerElement extends Components.AppPageContainer, HTMLStencilElement {
    }
    var HTMLAppPageContainerElement: {
        prototype: HTMLAppPageContainerElement;
        new (): HTMLAppPageContainerElement;
    };
    interface HTMLAppPageHomeElement extends Components.AppPageHome, HTMLStencilElement {
    }
    var HTMLAppPageHomeElement: {
        prototype: HTMLAppPageHomeElement;
        new (): HTMLAppPageHomeElement;
    };
    interface HTMLAppProfileMenuElement extends Components.AppProfileMenu, HTMLStencilElement {
    }
    var HTMLAppProfileMenuElement: {
        prototype: HTMLAppProfileMenuElement;
        new (): HTMLAppProfileMenuElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppSidebarElement extends Components.AppSidebar, HTMLStencilElement {
    }
    var HTMLAppSidebarElement: {
        prototype: HTMLAppSidebarElement;
        new (): HTMLAppSidebarElement;
    };
    interface HTMLAppSidebarDElement extends Components.AppSidebarD, HTMLStencilElement {
    }
    var HTMLAppSidebarDElement: {
        prototype: HTMLAppSidebarDElement;
        new (): HTMLAppSidebarDElement;
    };
    interface HTMLAppSidebarMElement extends Components.AppSidebarM, HTMLStencilElement {
    }
    var HTMLAppSidebarMElement: {
        prototype: HTMLAppSidebarMElement;
        new (): HTMLAppSidebarMElement;
    };
    interface HTMLAppSidebarMenuLinksElement extends Components.AppSidebarMenuLinks, HTMLStencilElement {
    }
    var HTMLAppSidebarMenuLinksElement: {
        prototype: HTMLAppSidebarMenuLinksElement;
        new (): HTMLAppSidebarMenuLinksElement;
    };
    interface HTMLAppSvgElement extends Components.AppSvg, HTMLStencilElement {
    }
    var HTMLAppSvgElement: {
        prototype: HTMLAppSvgElement;
        new (): HTMLAppSvgElement;
    };
    interface HTMLAppThemeTogglerElement extends Components.AppThemeToggler, HTMLStencilElement {
    }
    var HTMLAppThemeTogglerElement: {
        prototype: HTMLAppThemeTogglerElement;
        new (): HTMLAppThemeTogglerElement;
    };
    interface HTMLElementTagNameMap {
        "app-auth-login": HTMLAppAuthLoginElement;
        "app-auth-profile": HTMLAppAuthProfileElement;
        "app-auth-register": HTMLAppAuthRegisterElement;
        "app-flash-message": HTMLAppFlashMessageElement;
        "app-header": HTMLAppHeaderElement;
        "app-header-menu": HTMLAppHeaderMenuElement;
        "app-header-search": HTMLAppHeaderSearchElement;
        "app-home": HTMLAppHomeElement;
        "app-layout": HTMLAppLayoutElement;
        "app-layout-external": HTMLAppLayoutExternalElement;
        "app-layout-internal": HTMLAppLayoutInternalElement;
        "app-notification-menu": HTMLAppNotificationMenuElement;
        "app-page-container": HTMLAppPageContainerElement;
        "app-page-home": HTMLAppPageHomeElement;
        "app-profile-menu": HTMLAppProfileMenuElement;
        "app-root": HTMLAppRootElement;
        "app-sidebar": HTMLAppSidebarElement;
        "app-sidebar-d": HTMLAppSidebarDElement;
        "app-sidebar-m": HTMLAppSidebarMElement;
        "app-sidebar-menu-links": HTMLAppSidebarMenuLinksElement;
        "app-svg": HTMLAppSvgElement;
        "app-theme-toggler": HTMLAppThemeTogglerElement;
    }
}
declare namespace LocalJSX {
    interface AppAuthLogin {
        /**
          * history instance.
         */
        "history"?: RouterHistory;
    }
    interface AppAuthProfile {
    }
    interface AppAuthRegister {
        /**
          * history instance.
         */
        "history"?: RouterHistory;
    }
    interface AppFlashMessage {
        /**
          * alert closable.
         */
        "closable"?: boolean;
        /**
          * Show/hide alert message
         */
        "show"?: boolean;
        /**
          * Message type
         */
        "type"?: string;
    }
    interface AppHeader {
    }
    interface AppHeaderMenu {
    }
    interface AppHeaderSearch {
    }
    interface AppHome {
    }
    interface AppLayout {
    }
    interface AppLayoutExternal {
        /**
          * history instance.
         */
        "history"?: RouterHistory;
    }
    interface AppLayoutInternal {
        /**
          * history instance.
         */
        "history"?: RouterHistory;
    }
    interface AppNotificationMenu {
    }
    interface AppPageContainer {
    }
    interface AppPageHome {
    }
    interface AppProfileMenu {
    }
    interface AppRoot {
    }
    interface AppSidebar {
    }
    interface AppSidebarD {
    }
    interface AppSidebarM {
    }
    interface AppSidebarMenuLinks {
    }
    interface AppSvg {
        "type"?: 'Github' | 'Twitter';
    }
    interface AppThemeToggler {
    }
    interface IntrinsicElements {
        "app-auth-login": AppAuthLogin;
        "app-auth-profile": AppAuthProfile;
        "app-auth-register": AppAuthRegister;
        "app-flash-message": AppFlashMessage;
        "app-header": AppHeader;
        "app-header-menu": AppHeaderMenu;
        "app-header-search": AppHeaderSearch;
        "app-home": AppHome;
        "app-layout": AppLayout;
        "app-layout-external": AppLayoutExternal;
        "app-layout-internal": AppLayoutInternal;
        "app-notification-menu": AppNotificationMenu;
        "app-page-container": AppPageContainer;
        "app-page-home": AppPageHome;
        "app-profile-menu": AppProfileMenu;
        "app-root": AppRoot;
        "app-sidebar": AppSidebar;
        "app-sidebar-d": AppSidebarD;
        "app-sidebar-m": AppSidebarM;
        "app-sidebar-menu-links": AppSidebarMenuLinks;
        "app-svg": AppSvg;
        "app-theme-toggler": AppThemeToggler;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-auth-login": LocalJSX.AppAuthLogin & JSXBase.HTMLAttributes<HTMLAppAuthLoginElement>;
            "app-auth-profile": LocalJSX.AppAuthProfile & JSXBase.HTMLAttributes<HTMLAppAuthProfileElement>;
            "app-auth-register": LocalJSX.AppAuthRegister & JSXBase.HTMLAttributes<HTMLAppAuthRegisterElement>;
            "app-flash-message": LocalJSX.AppFlashMessage & JSXBase.HTMLAttributes<HTMLAppFlashMessageElement>;
            "app-header": LocalJSX.AppHeader & JSXBase.HTMLAttributes<HTMLAppHeaderElement>;
            "app-header-menu": LocalJSX.AppHeaderMenu & JSXBase.HTMLAttributes<HTMLAppHeaderMenuElement>;
            "app-header-search": LocalJSX.AppHeaderSearch & JSXBase.HTMLAttributes<HTMLAppHeaderSearchElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-layout": LocalJSX.AppLayout & JSXBase.HTMLAttributes<HTMLAppLayoutElement>;
            "app-layout-external": LocalJSX.AppLayoutExternal & JSXBase.HTMLAttributes<HTMLAppLayoutExternalElement>;
            "app-layout-internal": LocalJSX.AppLayoutInternal & JSXBase.HTMLAttributes<HTMLAppLayoutInternalElement>;
            "app-notification-menu": LocalJSX.AppNotificationMenu & JSXBase.HTMLAttributes<HTMLAppNotificationMenuElement>;
            "app-page-container": LocalJSX.AppPageContainer & JSXBase.HTMLAttributes<HTMLAppPageContainerElement>;
            "app-page-home": LocalJSX.AppPageHome & JSXBase.HTMLAttributes<HTMLAppPageHomeElement>;
            "app-profile-menu": LocalJSX.AppProfileMenu & JSXBase.HTMLAttributes<HTMLAppProfileMenuElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-sidebar": LocalJSX.AppSidebar & JSXBase.HTMLAttributes<HTMLAppSidebarElement>;
            "app-sidebar-d": LocalJSX.AppSidebarD & JSXBase.HTMLAttributes<HTMLAppSidebarDElement>;
            "app-sidebar-m": LocalJSX.AppSidebarM & JSXBase.HTMLAttributes<HTMLAppSidebarMElement>;
            "app-sidebar-menu-links": LocalJSX.AppSidebarMenuLinks & JSXBase.HTMLAttributes<HTMLAppSidebarMenuLinksElement>;
            "app-svg": LocalJSX.AppSvg & JSXBase.HTMLAttributes<HTMLAppSvgElement>;
            "app-theme-toggler": LocalJSX.AppThemeToggler & JSXBase.HTMLAttributes<HTMLAppThemeTogglerElement>;
        }
    }
}
