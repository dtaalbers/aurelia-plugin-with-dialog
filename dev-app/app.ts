import { autoinject } from 'aurelia-framework';
import { ModalService } from 'resources';

@autoinject()
export class App {
    public constructor(
        public modalService: ModalService
    ) { }

    async clicked(): Promise<void> {
        await this.modalService.dialog({});
    }
}
