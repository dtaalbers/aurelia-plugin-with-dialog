import { DialogService } from 'aurelia-dialog';
import { autoinject } from 'aurelia-framework';
import { MyDialog } from '../modals/my-dialog/my-dialog';

@autoinject()
export class ModalService {

    public constructor(
        private readonly dialogService: DialogService
    ) { }

    public async dialog(options: any): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.dialogService.open({
                viewModel: MyDialog,
                model: options,
                overlayDismiss: true
            }).whenClosed((result) => resolve(!result.wasCancelled))
                .catch((err) => reject(err));
        });
    }
}
