import { ChangeDetectorRef, Component } from '@angular/core';
import { timer } from 'rxjs';
import { Category } from './home.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showCategoriesScreen = true
  showStartScreen = false
  showHelpScreen = false
  showResultScreen = false
  showingCategory: Category | undefined

  constructor (
    private cdRef: ChangeDetectorRef
  ) {}

  onClickCategory (category: Category): void {
    this.showCategoriesScreen = false
    this.showStartScreen = true
    this.showHelpScreen = false
    this.showResultScreen = false
    this.showingCategory = category
    this.cdRef.detectChanges()
  }

  backToCategoryScreen (): void {
    this.showCategoriesScreen = true
    this.showStartScreen = false
    this.showHelpScreen = false
    this.showResultScreen = false
  }

  closeStartScreen (): void {
    this.showHelpScreen = true
    timer(500).subscribe(() => {
      this.showCategoriesScreen = false
      this.showStartScreen = false
      this.showResultScreen = false
      this.cdRef.detectChanges()
    })
  }

  closeHelpScreen (): void {
    this.showResultScreen = true
    this.cdRef.detectChanges()
    timer(500).subscribe(() => {
      this.showCategoriesScreen = false
      this.showStartScreen = false
      this.showHelpScreen = false
      this.cdRef.detectChanges()
    })
  }

  closeResultScreen (): void {
    this.showCategoriesScreen = true
    this.showStartScreen = false
    this.showHelpScreen = false
    this.showResultScreen = false
    this.cdRef.detectChanges()
  }
}
