import { 
    Injectable,
    Component,
    ɵrenderComponent,
    ɵcompileComponent,
    ɵmarkDirty,
    NgModule,
    Input
  } from "@angular/core";
  import "@angular/compiler";
import { LibModule } from './lib/lib.module';

@Injectable({providedIn: 'root'})
export class DynamicComponentService {
    constructor() { }
    
    renderComponent(template: string, dynamicHost: any) {
        const metadata = {
            selector: `ivy`,
            template: template
        };
            
        @Component(metadata)
        class IvyComponent {
            @Input() model: any;
        }
        @NgModule({
            imports: [LibModule],
            declarations: [IvyComponent]
        })
        class DynamicModule {}
        
        ɵcompileComponent(IvyComponent, metadata);
        ɵrenderComponent(IvyComponent, { host: dynamicHost });
    }
}

  