var Player=pc.createScript("player");Player.prototype.initialize=function(){},Player.prototype.update=function(t){this.app.keyboard.isPressed(pc.KEY_LEFT)&&this.entity.translate(.03,0,0),this.app.keyboard.isPressed(pc.KEY_RIGHT)&&this.entity.translate(-.03,0,0),this.entity.translate(0,0,.02)};var Goal=pc.createScript("goal");Goal.prototype.initialize=function(){this.entity.collision.on("collisionstart",(()=>{location.href="",1e3==this.app.score?alert("Perfect!!"):alert("惜しい！")}),this)},Goal.prototype.update=function(t){};var Pumpkin=pc.createScript("pumpkin");Pumpkin.prototype.initialize=function(){this.entity.collision.on("collisionstart",(()=>{this.entity.destroy(),this.app.score=this.app.score+100,this.app.fire("pumpkin:destroy")}),this)},Pumpkin.prototype.update=function(i){};var Score=pc.createScript("score");Score.prototype.initialize=function(){this.app.score=0},Score.prototype.update=function(t){this.entity.element.text=this.app.score};var SoundManager=pc.createScript("soundManager");SoundManager.prototype.initialize=function(){this.app.on("pumpkin:destroy",(()=>{this.entity.sound.play("pumpkin:destroy")}),this)},SoundManager.prototype.update=function(n){};