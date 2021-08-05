import { FrameworkConfiguration } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { MyDialog } from './modals/my-dialog/my-dialog';

export function configure(config: FrameworkConfiguration): void {
    config.globalResources([
        PLATFORM.moduleName('./elements/hello-world')
    ]);

    config.plugin(PLATFORM.moduleName('aurelia-dialog'), (cfg) => {
        cfg.useDefaults();
        cfg.settings.centerHorizontalOnly = true;
        cfg.lock = false;
        cfg.settings.keyboard = 'Escape';
    });
}

export {
    MyDialog
};

