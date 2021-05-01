import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { UrlTransformer } from "./url-transformer";
import { ProviderInfo } from "./provider-info";

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent {

  constructor(private bottomSheetRef: MatBottomSheetRef<ShareComponent>) {

    const title = this.getOgProperty('title');
    const url = this.getOgProperty('url');
    const image = this.getOgProperty('image');
    const description = this.getOgProperty('description');

    if (title && url && image && description) {
      this.transformedLinks = this.links.map(item => {
        const urlTransformer = new UrlTransformer(item.url);

        urlTransformer.appendParameter('postUrl', url);
        urlTransformer.appendParameter('isVideo', 'false');
        urlTransformer.appendParameter('postTitle', title);
        urlTransformer.appendParameter('postImg', image);
        urlTransformer.appendParameter('postDesc', description);
        return { name: item.name, url: urlTransformer.resultUrl };
      });
    } else {
      this.transformedLinks = [];
    }
  }

  private getOgProperty(name: string): string | null {
    const titleMeta = document.querySelector(`meta[property='og:${name}']`);
    if (titleMeta) {
      return titleMeta.getAttribute('content');
    }
    return null;
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  public transformedLinks: ProviderInfo[];
  private links: ProviderInfo[] = [
    //"https://api.whatsapp.com/send?text=[postTitle] [postUrl]",
    //"https://delicious.com/save?v=5&provider=[provider]&noui&jump=close&url=[postUrl]&title=[postTitle]",

    { url: 'https://www.facebook.com/sharer.php?u=[postUrl]', name: 'Facebook' },
    { url: 'https://twitter.com/share?url=[postUrl]&text=[postTitle]', name: 'Twitter' },//tested
    //{ url: 'https://plus.google.com/share?url=[postUrl]', name: 'Google' },
    { url: 'https://pinterest.com/pin/create/bookmarklet/?media=[postImg]&url=[postUrl]&is_video=[isVideo]&description=[postTitle]', name: 'Pinterest' }, // image= 1500/1000
    { url: 'https://www.linkedin.com/shareArticle?url=[postUrl]&title=[postTitle]', name: 'Linkedin' },
    //{ url: 'https://bufferapp.com/add?text=[postTitle]&url=[postUrl]', name: 'Bufferapp' },
    { url: 'https://www.tumblr.com/share/link?url=[postUrl]&name=[postTitle]&description=[postDesc]', name: 'Tumblr' },
    { url: 'https://reddit.com/submit?url=[postUrl]&title=[postTitle]', name: 'Reddit' },// tested
    { url: "https://telegram.me/share/url?url=[postUrl]&text=[postTitle]", name: 'Telegram' }
    //{ url: 'https://www.stumbleupon.com/submit?url=[postUrl]&title=[postTitle]', name: 'Stumbleupon' },
    //{ url: 'https://www.evernote.com/clip.action?url=[postUrl]&title=[postTitle]', name: 'Evernote' },
    //{ url: 'https://wordpress.com/press-this.php?u=[postUrl]&t=[postTitle]&s=[postDesc]&i=[postImg]', name: 'Wordpress' },
    //{ url: 'https://getpocket.com/save?url=[postUrl]&title=[postTitle]', name: 'Getpocket' }
  ];
}
