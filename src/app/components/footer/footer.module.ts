import { CommonModule } from "@angular/common";
import { FooterComponent } from "./footer.component";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";


@NgModule(
  {
    declarations: [FooterComponent],
    imports: [CommonModule, FormsModule],
    exports: [FooterComponent]
  }
)

export class FooterModule {}
