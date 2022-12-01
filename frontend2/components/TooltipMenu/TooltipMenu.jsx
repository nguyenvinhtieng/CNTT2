import Link from "next/link";
import React from "react";

export default function TooltipMenu({ position, menu, isShow }) {
  return (
    <ul className={`tooltip-menu ${isShow ? "is-show" : ""}`}>
      {menu.map((item, index) => (
        <li key={index} className="tooltip-menu__item">
          {item.link && (
            <Link href={item.link}>
              <span className="tooltip-menu__item--ico">
                <item.Icon></item.Icon>
              </span>
              <span className="tooltip-menu__item--ttl">{item.title}</span>
            </Link>
          )}
          {!item.link && (
            <div
              className="tooltip-menu__item--wrapper"
              onClick={item.clickAction}
            >
              <span className="tooltip-menu__item--ico">
                <item.Icon></item.Icon>
              </span>
              <span className="tooltip-menu__item--ttl">{item.title}</span>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
