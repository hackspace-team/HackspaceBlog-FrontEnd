import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonService } from '../service/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  @ViewChild('addPost') addBtn: ElementRef;

  constructor(private commonService: CommonService, private router: Router) {

    this.commonService.postEdit_Observable.subscribe(res => {
      this.addBtn.nativeElement.click();
    });

    if (!localStorage.getItem('loggedInUser')) {
      this.router.navigate(['/']);
    }

  }

  ngOnInit() {
    
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/']);
  }

}

