import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { GheComponent } from '../ghe/ghe.component';
import { GheService } from 'src/app/core/services/ghe.service';
import { Ghe } from 'src/app/core/models/ghe';
@Component({
  selector: 'app-danh-sach-ghe',
  templateUrl: './danh-sach-ghe.component.html',
  styleUrls: ['./danh-sach-ghe.component.scss'],
})
export class DanhSachGheComponent implements OnInit {
  @ViewChildren(GheComponent) gheComponent: QueryList<GheComponent>;
  mangGhe: Ghe[] = [];
  mangGheDangDat: any[] = [];
  constructor(private gheService: GheService) {}

  ngOnInit(): void {
    this.mangGhe = this.gheService.layDanhSachGhe();
  }

  datGhe(gheDangDat: any) {
    if (gheDangDat.TrangThai) {
      this.mangGheDangDat.push(gheDangDat);
    } else {
      this.mangGheDangDat = this.mangGheDangDat.filter(
        (item) => item.SoGhe !== gheDangDat.SoGhe
      );
    }

    console.log(this.mangGheDangDat);
  }

  huyGhe(ghe: any) {
    this.mangGheDangDat = this.mangGheDangDat.filter(
      (item) => item.SoGhe !== ghe
    );

    this.gheComponent.forEach((itemGhe: GheComponent) => {
      if (itemGhe.ghe.SoGhe === ghe) {
        itemGhe.gheDangDat = false;
      }
    });
  }
}
