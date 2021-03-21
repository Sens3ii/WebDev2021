import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AlbumPhotoComponent} from './album-photo.component';

describe('AlbumPhotoComponent', () => {
  let component: AlbumPhotoComponent;
  let fixture: ComponentFixture<AlbumPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumPhotoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
