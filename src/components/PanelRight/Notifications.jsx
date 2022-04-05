//fake
import { NotificationsList } from "../../fake-data/Mock-NotificationsList";
//styles
import {
  Notification,
  NotificationsHeader,
  NotificationsItemWrapper,
  NotificationsItem,
  NotificationsText,
  IconsWrapper,
  Icons,
} from "./_NotificationsStyles";
//icon
import Options from "../../assets/svg/notifications/options.svg";

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

export { Notifications };
