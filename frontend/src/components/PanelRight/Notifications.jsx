import React from "react";
//icon
import Options from "../../assets/svg/notifications/options.svg";
//fake
import { NotificationsList } from "../../fake-data/Mock-NotificationsList";
//styles
import {
  Icons,
  IconsWrapper,
  Notification,
  NotificationsHeader,
  NotificationsItem,
  NotificationsItemWrapper,
  NotificationsText,
} from "./_NotificationsStyles";

const Notifications = () => {
  return (
    <Notification>
      <NotificationsHeader>
        <span>Notifications</span>
        <img src={Options} alt="options" />
      </NotificationsHeader>
      <NotificationsItemWrapper>
        {NotificationsList.map((item) => (
          <NotificationsItem key={item.id}>
            <IconsWrapper>
              <Icons src={item.icon} alt={item.text} />
            </IconsWrapper>
            <NotificationsText>
              <span>{item.text}</span>
              <span>{item.count}</span>
            </NotificationsText>
          </NotificationsItem>
        ))}
      </NotificationsItemWrapper>
    </Notification>
  );
};

export default Notifications;
