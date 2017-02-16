import { mockApp, mockConfig } from '../../../util/mock-providers';
import { Component } from '@angular/core';
import { ModalController } from '../modal-controller';
import { ModalCmp } from '../modal-component';
import { ViewController } from '../../../navigation/view-controller';

describe('Modal', () => {

  describe('create', () => {

    it('should have the correct properties on modal view controller instance', () => {
      let modalCtrl = new ModalController(mockApp(), mockConfig());
      let modalViewController = modalCtrl.create(ComponentToPresent);
      expect(modalViewController.component).toEqual(ModalCmp);
      expect(modalViewController.isOverlay).toEqual(true);
      expect(modalViewController instanceof ViewController).toEqual(true);
    });
  });

});

@Component({
  template: `<div class="myComponent"></div>`
})
class ComponentToPresent {}
