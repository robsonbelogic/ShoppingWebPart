import * as React from "react";
import * as ReactDom from "react-dom";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { loadBrandFonts } from "./utils/fonts";

import NewsBoxCar from "./components/ShoppingProductView";

export default class NewsWebPart extends BaseClientSideWebPart<{}> {
  public async onInit(): Promise<void> {
    loadBrandFonts();
  }

  public render(): void {
    const element = React.createElement(NewsBoxCar);

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }
}
