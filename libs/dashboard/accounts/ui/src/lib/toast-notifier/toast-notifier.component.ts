import { Component, OnInit } from '@angular/core';
import { NotificationService } from '@buildmotion/notifications';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'buildmotion-toast-notifier',
  templateUrl: './toast-notifier.component.html',
  styleUrls: ['./toast-notifier.component.scss'],
})
export class ToastNotifierComponent implements OnInit {
  // #region Properties (4)

  private messagesSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  private titleSubject: BehaviorSubject<string> = new BehaviorSubject<string>(undefined);

  public readonly messages$: Observable<string[]> = this.messagesSubject.asObservable();
  public readonly title$: Observable<string> = this.titleSubject.asObservable();

  // #endregion Properties (4)

  // #region Constructors (1)

  constructor(
    private notifications: NotificationService
  ) { }

  // #endregion Constructors (1)

  // #region Public Methods (1)

  public ngOnInit(): void {
    this.notifications.notifications$.subscribe(
      (notification) => {
        if (notification) {
          this.titleSubject.next(notification.title);
          this.messagesSubject.next(notification.messages);
        }
      }
    )
  }

  // #endregion Public Methods (1)
}
