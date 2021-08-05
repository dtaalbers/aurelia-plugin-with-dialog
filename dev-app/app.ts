import { DialogService } from 'aurelia-dialog';
import { autoinject } from 'aurelia-framework';
import { MyDialog } from 'resources';

@autoinject()
export class App {
    public message = 'from Aurelia!';

    public constructor(
        public dialogService: DialogService
    ) { }


    clicked(): void {
        this.dialogService.open({
            viewModel: MyDialog
        })
    }

}
